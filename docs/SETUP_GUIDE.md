# Setup Guide (short)

This guide assumes you're using Kali Linux (VM) with Android Studio installed.

1. Update system and install prereqs:
   sudo apt update && sudo apt upgrade -y
   sudo apt install -y git python3-pip openjdk-11-jdk wget unzip adb

2. Install MobSF:
   git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git
   cd Mobile-Security-Framework-MobSF
   bash setup.sh
   bash run.sh 127.0.0.1:8000

3. Install JADX, apktool, Frida (host + frida-server on emulator) and Burp Suite as described in the roadmap.

4. Do NOT upload production APKs to this repo. Download intentionally vulnerable APKs and place them into a local `apks/` folder for testing.
