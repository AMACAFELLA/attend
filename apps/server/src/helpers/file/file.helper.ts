import * as fs from 'fs'
import * as Path from 'path'
import { join } from 'path'

export namespace FileHelper {
  export function getRoot(): string {
    return Path.join(__dirname, '../../..')
  }

  export function findFileContent(path: string): string {
    return fs.readFileSync(path, 'utf-8')
  }

  export function writeFolder(path: string): void {
    fs.mkdirSync(path, { recursive: true })
  }

  export function writeFile(path: string, content: string | Buffer): void {
    const pathFolder = path.split('/').slice(0, -1).join('/')

    writeFolder(pathFolder)

    return fs.writeFileSync(path, content)
  }

  export function joinPaths(...paths: string[]): string {
    return join(...paths)
  }
}
