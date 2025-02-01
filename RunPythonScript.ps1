# Chemin du dossier de travail
$projectFolder = "C:\Users\Bilal\Desktop\Projects\network AutomationTool"

# Chemin du fichier Python
$pythonScriptPath = "$projectFolder\generate_json.py"

# Chemin du fichier JSON à générer
$jsonFilePath = "$projectFolder\project_data.json"

# Créer le script Python
$pythonScriptContent = @"
import json

data = {
    "id": 1,
    "title": "Network Automation Tool",
    "type": "Backend",
    "description": "A network monitoring solution using SNMP and browser automation for Olympic Broadcasting Services (OBS).",
    "technologies": ["Python", "Selenium", "SNMPv3", "Bash", "Pandas", "Power BI"],
    "features": [
        "Automated network metrics retrieval via SNMP",
        "Browser automation using Selenium for data extraction",
        "Intelligent PDF report generation",
        "Data analysis and visualization with Power BI",
        "Real-time monitoring dashboard",
        "Cross-platform compatibility"
    ],
    "results": [
        "Reduced manual monitoring time by 80%",
        "Improved accuracy of network reports",
        "Enabled proactive issue detection and resolution"
    ],
    "image": "/projects/automation.jpg",
    "github": "https://github.com/yourprofile",
    "demo": None
}

with open("project_data.json", "w") as json_file:
    json.dump(data, json_file, indent=4)

print("Fichier JSON créé avec succès : project_data.json")
"@

# Écrire le script Python dans le fichier
Set-Content -Path $pythonScriptPath -Value $pythonScriptContent

# Vérifier si Python est installé
if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Host "Python n'est pas installé. Veuillez installer Python avant de continuer."
    exit
}

# Exécuter le script Python
Write-Host "Exécution du script Python..."
python $pythonScriptPath

# Vérifier si le fichier JSON a été créé
if (Test-Path $jsonFilePath) {
    Write-Host "Le fichier JSON a été créé avec succès : $jsonFilePath"
} else {
    Write-Host "Erreur : Le fichier JSON n'a pas été créé."
}