# Airbnb E2E Automation with Cypress

Projeto de automação de testes End-to-End utilizando Cypress e JavaScript, desenvolvido para demonstrar técnicas de automação de testes funcionais em uma plataforma de hospedagem.

## Tecnologias

- Cypress
- JavaScript
- Node.js
- Git
- GitHub Actions
- Mochawesome

## Objetivos

Automatizar jornadas de usuários na plataforma Airbnb, contemplando cenários positivos e negativos.

## Escopo dos testes

- Home page validation
- Destination search
- Check-in and check-out selection
- Guest selection
- Search filters
- Accommodation details validation

## Quality Practices

- Test automation best practices
- Reusable custom commands
- Test data management
- Independent test scenarios
- CI/CD integration
- Execution reports and screenshots

## Execution

```bash
npm install
npm run cy:open
```

Para executar em modo headless:

```bash
npm run cy:run
```

## Disclaimer

This project is intended for educational and portfolio purposes. Tests interact with a publicly accessible third-party website and may be affected by changes in its interface, availability, or access restrictions. No real bookings or payments are performed.