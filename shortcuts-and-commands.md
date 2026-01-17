# ⌨️ Shortcuts & Commands Cheat Sheet

A quick reference for daily **.NET + Angular** development.

---

## ⚡ Keyboard Shortcuts for Visual Studio Code

Commonly used shortcuts to speed up development and navigation.

| Shortcut | Action |
|--------|-------|
| Ctrl + ` | 🟨Open integrated terminal |
| Ctrl + Shift + ` | Create a new terminal |
| Ctrl + Shift + P | 🟨Open Command Palette |
| Ctrl + P | 🟨Quick file open |
| Ctrl + Shift + E | Focus Explorer |
| Ctrl + Shift + F | 🟨Global search |
| Ctrl + B | Toggle sidebar |
| Ctrl + , | Open Settings |
| Ctrl + K Ctrl + S | Open Keyboard Shortcuts |
| Ctrl + Shift + X | Open Extensions view |
| Ctrl + Shift + D | Open Run & Debug |
| Ctrl + Shift + G | Open Source Control (Git) |
| Ctrl + Space | Trigger IntelliSense |
| Ctrl + . | Quick Fix / Code Actions |
| Alt + ↑ / ↓ | Move line up / down |
| Shift + Alt + ↑ / ↓ | Duplicate line |
| Ctrl + / | Toggle line comment |


### 💡 Tip
Mastering a few of these shortcuts can significantly reduce mouse usage  
and improve overall coding flow.


---

## 🧱 .NET CLI Commands

### ➕ Create a New Solution
```bash
dotnet new sln
```

### 🌐 Create a New Web API Project
```bash
dotnet new webapi -controllers -n {project-name}
```
dotnet new classlib -n {class-name}
### 🔗 Add Project to Solution
```bash
dotnet sln add {project-name}
```

### 📋 List Solution Projects
```bash
dotnet sln list
```

### 🛠️ Install dotnet-ef

Cross-platform CLI tool for Entity Framework Core.

```bash
dotnet tool install -g dotnet-ef
```

### 🧬 Add Migration
```bash
dotnet ef migrations add {migration-name} -o Data/Migrations
```

### 🗄️ Update / Create Database
```bash
dotnet ef database update
```

### ▶️ Run Application
```bash
dotnet run
```

### 🔥 Run with Hot Reload
```bash
dotnet watch
```

### 📦 Restore Packages
```bash
dotnet restore
```

## 🔀 Git Commands
### Add Git Ignore File
```bash
dotnet new gitignore
```
**Add to this file the following files:**
- appsettings.json
- *.db files

## ⚛️ React Commands

### Install React Using Vite
```bash
npm create vite@latest
```
### Create local CA
```bash
npm install -D vite-plugin-mkcert
```
### Install Axios
```bash
npm install axios
```
### Install Material UI
```bash
npm install @mui/material @emotion/react @emotion/styled
```
### Add Roboro font for Material UI
```bash
npm install @fontsource/roboto
```
```TypeScript
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

### Icons for Material UI
```bash
npm install @mui/icons-material
```

## 🅰️ Angular CLI Commands

### 📥 Install Angular CLI
```bash
npm install -g @angular/cli
```

### 🏗️ Create a New Angular Project
```bash
ng new <project-name>
```

Recommended Options:
- Zoneless: Yes
- Stylesheet: CSS
- SSR: No

### 🚀 Run Angular Project
```bash
ng serve
```

## ✅ Tip

Run the .NET backend and Angular frontend in separate terminals  
for the best development experience.
