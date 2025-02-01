# Network Automation Bot

## Description
This project automates network monitoring using **SNMPv3** and **Selenium Web Automation**.  
It is designed for **Olympic Broadcasting Services (OBS)** to retrieve printer status efficiently.

## Objectives
- **SNMPv3**: Used to collect network data from printers (e.g., toner status, error codes).
- **Selenium**: Used to extract additional information from the printer's web interface.

## Technologies Used
- **Python**
- **Selenium (ChromeDriver)**
- **SNMPv3 (PySNMP)**
- **Pandas**
- **Excel (XLSX)** for data storage

## File Structure
- `network_monitor.py` → Main script.
- `printer_ips.json` → Contains printer IPs.
- `printers_data.xlsx` → Output file with collected data.

## Installation & Usage
1. Install dependencies:
   ```bash
   pip install pysnmp pandas selenium openpyxl
#   N e t A u t o B o t  
 #   N e t A u t o B o t  
 