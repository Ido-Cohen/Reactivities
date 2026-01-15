# 📦 NuGet Packages to Install

> ⚠️ **Important:**  
> Make sure to **deselect "Include prerelease"** when installing packages.

---

## 🧩 Required Packages

### 🔹 Microsoft.EntityFrameworkCore.Design
Used for **design-time features** such as:
- Migrations
- Scaffolding
- EF Core CLI support

Required for `dotnet ef` commands to work properly.

to API layer
---

### 🔹 Microsoft.EntityFrameworkCore.Sqlite
SQLite provider for Entity Framework Core.

Used when:
- Developing locally
- Lightweight databases
- Prototyping or small services

to persistence layer
---

### 🔹 Microsoft.AspNetCore.OpenApi
Provides OpenAPI (Swagger) support for ASP.NET Core APIs.

Enables:
- Swagger UI
- API documentation
- API testing from the browser

---

### 🔹 Microsoft.AspNetCore.Authentication.JwtBearer
Adds JWT Bearer authentication to ASP.NET Core.

Used for:
- Securing APIs
- Token-based authentication
- Integration with Identity Providers

---

### 🔹 Microsoft.IdentityModel.Tokens
Core library for working with security tokens.

Used for:
- Token validation
- Signing credentials
- Cryptographic operations in authentication flows

---

### 🔹 System.IdentityModel.Tokens.Jwt
JWT-specific implementation for creating and validating JSON Web Tokens.

Used for:
- Generating JWT tokens
- Parsing and validating incoming tokens

---

## 📌 Installation Notes

- Install via **NuGet Gallery** extension  
  **or**
- Use the `.csproj` file  
  **or**
- Use the terminal with `dotnet add package`

---

## ✅ Recommendations

- Keep **all Entity Framework Core packages** on the same major version  
  (e.g. `8.x.x`)
- Keep **JWT-related packages** compatible with your ASP.NET Core version
- Avoid mixing preview and stable packages

> [!IMPORTANT]
> Version mismatches between EF Core or JWT packages can cause
> runtime errors that are hard to debug.
