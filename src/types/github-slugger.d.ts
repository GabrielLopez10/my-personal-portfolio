declare module 'github-slugger' {
  class GithubSlugger {
    static slug(tag: string) {
      throw new Error('Method not implemented.');
    }
    slug (string: string, maintainCase?: boolean): string
  }
  export default GithubSlugger
}
