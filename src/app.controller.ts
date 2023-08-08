import { Body, Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/invite/')
  async getInvite(
    @Body('slack_user_tag') slack_user_tag: string,
    @Body('flag') flag: string,
  ): Promise<any> {
    return await this.appService.getInvite(slack_user_tag, flag);
  }
}
