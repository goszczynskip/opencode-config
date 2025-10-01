import { tool } from "@opencode-ai/plugin/tool"
import { execSync } from "child_process"
import { existsSync } from "fs"

export default tool({
  description: "Collect metadata about the current environment and repository",
  args: {},
  async execute(args: any, context: any) {
    const metadata: string[] = []
    
    // Current Date/Time with timezone
    const datetimeTz = new Date().toLocaleString('en-CA', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    }).replace(/,/, '')
    metadata.push(`Current Date/Time (TZ): ${datetimeTz}`)
    
    // Timestamp for filename
    const filenameTs = new Date().toISOString().slice(0, 19).replace(/:/g, '-')
    
    // Git information
    let repoRoot = ""
    let repoName = ""
    let gitBranch = ""
    let gitCommit = ""
    
    try {
      // Check if we're in a git repository
      execSync("git rev-parse --is-inside-work-tree", { stdio: "ignore" })
      
      repoRoot = execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim()
      repoName = repoRoot.split("/").pop() || ""
      
      try {
        gitBranch = execSync("git branch --show-current", { encoding: "utf8" }).trim()
      } catch {
        gitBranch = execSync("git rev-parse --abbrev-ref HEAD", { encoding: "utf8" }).trim()
      }
      
      gitCommit = execSync("git rev-parse HEAD", { encoding: "utf8" }).trim()
      
    } catch {
      // Not in a git repository
    }
    
    if (gitCommit) {
      metadata.push(`Current Git Commit Hash: ${gitCommit}`)
    }
    if (gitBranch) {
      metadata.push(`Current Branch Name: ${gitBranch}`)
    }
    if (repoName) {
      metadata.push(`Repository Name: ${repoName}`)
    }
    metadata.push(`Timestamp For Filename: ${filenameTs}`)
    
    // Optional: thoughts system status (removed humanlayer dependency)
    
    return metadata.join("\n")
  },
})
