# Goszczu's Opencode Configuration

This repository contains a custom configuration for [opencode](https://opencode.ai), an interactive CLI tool for software engineering tasks. This config is ported and adapted from the [humanlayer](https://github.com/humanlayer) repository to work with opencode with some additional configuration added on top.

## Overview

This configuration extends opencode with specialized agents, commands, and tools to enhance software development workflows. It includes integrations with external services via the Model Context Protocol (MCP) and custom TypeScript tools for metadata collection.

## Installation & Setup

1. **Clone or copy this repository** to your opencode config directory:
   ```bash
   cp -r /path/to/this/repo ~/.config/opencode
   ```

2. **Install dependencies**:
   ```bash
   cd ~/.config/opencode
   pnpm install
   ```

4. **Restart opencode** to load the new configuration.

## Components

### Agents (`agent/`)

Specialized subagents for specific tasks:

- **codebase-analyzer**: Analyzes codebase implementation details with precise file:line references
- **codebase-locator**: Locates files, directories, and components relevant to features or tasks
- **codebase-pattern-finder**: Finds similar implementations and usage examples in the codebase
- **research**: General-purpose research agent for complex questions
- **thoughts-analyzer**: Analyzes research documents and thoughts for insights
- **thoughts-locator**: Discovers relevant documents in thoughts/ directory
- **web-search-researcher**: Performs deep web research using search and fetch tools

### Commands (`command/`)

Custom commands for workflow automation:

- **implement**: Implements approved technical plans from `thoughts/shared/plans/`
- **linear**: Handles Linear ticket operations and integration
- **plan**: Creates detailed implementation plans through interactive process
- **research**: General research command for information gathering

### Tools (`tool/`)

Custom TypeScript tools extending opencode functionality:

- **spec-metadata**: Collects metadata about the current environment and repository, including git information, timestamps, and system details

### MCP Configuration (`opencode.json`)

Model Context Protocol servers for external integrations:

- **Figma**: Design tool integration via local MCP server
- **Supabase Docs**: Documentation access for Supabase
- **Supabase Local DB (Read-Only)**: Database inspection capabilities
- **Supabase Local DB (Read-Write)**: Full database operations
- **Supabase Dev Utils**: Development utilities and helpers

## Usage

### Invoking Agents

Use agents via the Task tool with the appropriate `subagent_type`:

```javascript
// Example: Analyze codebase implementation
Task({
  description: "Analyze user authentication flow",
  prompt: "Analyze how user login works in the codebase",
  subagent_type: "codebase-analyzer"
})
```

### Running Commands

Commands are invoked through opencode's command interface:

- `/plan` - Create implementation plans
- `/research` - Perform research tasks
- `/implement` - Execute approved plans
- `/linear` - Work with Linear tickets

### Using Tools

Tools are automatically available in opencode sessions:

- The `spec-metadata` tool provides environment and repository information
- MCP servers enable seamless integration with Figma and Supabase

## Development

### Project Structure

```
.
├── agent/          # Subagent definitions
├── command/        # Command definitions
├── tool/           # Custom TypeScript tools
├── opencode.json   # MCP server configuration
├── package.json    # Node.js dependencies
├── tsconfig.json   # TypeScript configuration
└── README.md       # This file
```

### Building

Compile TypeScript tools:

```bash
pnpm build
```

Watch mode for development:

```bash
pnpm dev
```

### Adding New Components

- **Agents**: Add markdown files to `agent/` following the existing format
- **Commands**: Add markdown files to `command/` with proper frontmatter
- **Tools**: Add TypeScript files to `tool/` and update `tsconfig.json`
- **MCP Servers**: Update `opencode.json` with new server configurations

## Configuration Details

The configuration uses:
- **@opencode-ai/plugin**: Framework for custom tools and integrations
- **Zod**: Schema validation for tool parameters
- **TypeScript**: Type-safe tool development
- **MCP Protocol**: Standardized integration with external services

## Contributing

This configuration is designed to be modular and extensible. When adding new agents, commands, or tools:

1. Follow existing patterns and conventions
2. Include proper documentation and examples
3. Test integrations thoroughly
4. Update this README with new features

## License

This configuration is inspired from humanlayer config. Licensed under the Apache-2.0 License. See [LICENSE](LICENSE) for details.
