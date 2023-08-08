import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

const SECRET_FLAG = 'RDCTF{h4ck_th3_p4st_pr0t3ct_th3_futur3}';

@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getInvite(slack_user_tag: string, flag: string): Promise<any> {
    if (flag !== SECRET_FLAG)
      return { status: 'error', message: 'Invalid flag' };

    await firstValueFrom(
      this.httpService.post(
        'https://hooks.slack.com/triggers/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',
        { slack_user_tag },
      ),
    );

    return { status: 'success', message: 'Invite sent' };
  }
}
