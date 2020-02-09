import { DiscordBotListComConfig } from '../../models/config';
import { HttpService } from '../http-service';
import { BotSite } from './bot-site';

export class DiscordBotListComSite implements BotSite {
    public enabled = false;
    public name = 'bots.ondiscord.xyz';

    constructor(private config: DiscordBotListComConfig, private httpService: HttpService) {
        this.enabled = this.config.enabled;
    }

    public async updateServerCount(serverCount: number): Promise<void> {
        try {
            await this.httpService.post(
                this.config.url,
                { guilds: serverCount },
                this.config.token
            );
        } catch (error) {
            throw error;
        }
    }
}
