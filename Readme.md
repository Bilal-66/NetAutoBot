# Printer Monitoring and Reporting System

This project is a **Printer Monitoring and Reporting System** that collects data from printers using **SNMP** and **web scraping**, saves the data to an **Excel file**, and visualizes it using **Power BI**. It is designed to help IT teams monitor printer status, toner levels, and other metrics in real-time.

---

## Features

- **SNMP Monitoring**: Fetches printer data (e.g., toner levels) using SNMPv3.
- **Web Scraping**: Extracts additional printer status information from the printer's web interface using Selenium.
- **Data Storage**: Saves collected data to an Excel file (`printers_data.xlsx`).
- **Data Visualization**: Uses Power BI to create interactive dashboards and reports.
- **Error Handling**: Robust error handling and logging for reliable operation.

---

## Prerequisites

Before running the script, ensure you have the following installed:

1. **Python 3.x**: Download and install Python from [python.org](https://www.python.org/).
2. **Required Python Libraries**:
   - `pysnmp`
   - `selenium`
   - `pandas`
   - `openpyxl` (for Excel file support)

   Install them using pip:
   ```bash
   pip install pysnmp selenium pandas openpyxl