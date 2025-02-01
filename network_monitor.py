import json
import time
import pandas as pd
from pysnmp.hlapi import *
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options

# Load printer IPs from JSON file
def load_printer_ips(filename="printer_ips.json"):
    with open(filename, "r") as file:
        return json.load(file)["printers"]

# SNMPv3 request to fetch printer data
def snmp_get(ip, oid, user, auth_key, priv_key):
    iterator = getCmd(
        SnmpEngine(),
        UsmUserData(user, auth_key, priv_key, authProtocol=usmHMACSHAAuthProtocol, privProtocol=usmAesCfb128Protocol),
        UdpTransportTarget((ip, 161)),
        ContextData(),
        ObjectType(ObjectIdentity(oid))
    )
    
    errorIndication, errorStatus, errorIndex, varBinds = next(iterator)
    
    if errorIndication:
        return str(errorIndication)
    elif errorStatus:
        return f'Error: {errorStatus.prettyPrint()}'
    else:
        return varBinds[0][1].prettyPrint()

# Configure Selenium for web automation
def setup_selenium():
    options = Options()
    options.add_argument("--headless")
    service = Service("chromedriver")
    driver = webdriver.Chrome(service=service, options=options)
    return driver

# Extract printer info from web interface
def scrape_printer_web(driver, ip):
    url = f"http://{ip}"
    driver.get(url)
    time.sleep(3)
    
    try:
        info_element = driver.find_element(By.XPATH, "//td[contains(text(),'Status')]/following-sibling::td")
        return info_element.text
    except Exception:
        return "Data not found"

# Main execution function
def main():
    printer_ips = load_printer_ips()
    snmp_data = []
    driver = setup_selenium()
    
    for ip in printer_ips:
        snmp_result = snmp_get(ip, "1.3.6.1.2.1.43.5.1.1.17.1", "user", "authpass", "privpass")
        web_data = scrape_printer_web(driver, ip)
        
        snmp_data.append({
            "IP": ip,
            "Toner Status": snmp_result,
            "Web Status": web_data
        })
    
    driver.quit()
    
    df = pd.DataFrame(snmp_data)
    df.to_excel("printers_data.xlsx", index=False)
    print("Data saved in printers_data.xlsx")

if __name__ == "__main__":
    main()
