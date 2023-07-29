class GitHub {
    constructor() {
        this.clientId = 'f57112ed9cc644a79e94'
        this.clientSecret = '042c66f845c85cd5c1dd0172fa52dad9bc0c2e6c'
        this.perPage = 10
        this.sort = 'asc'

    }
    async getUser(username) {
        const profileRes = await fetch(
            `https://api.github.com/users/${username} ?client_id=${this.clientId}&client_secret=${this.clientSecret} `
        )

        const repoRes = await fetch(
            `https://api.github.com/users/${username}/repos?per_page=${this.perPage}&sort=${this.sort}&client_id=${this.clientId}&client_secret=${this.clientSecret} `
        )


        const profile = await profileRes.json()
        const repos = await repoRes.json()
        console.log(profile)
        return {
            profile , 
            repos
        } ;
    }
}

export default GitHub