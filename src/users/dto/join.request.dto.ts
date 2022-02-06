import { ApiProperty } from '@nestjs/swagger';

export class JoinRequestDto {
  @ApiProperty({
    example: 'zerocho0@gmail.com',
    description: '이메일',
    required: true,
  })
  public email: string;

  @ApiProperty({
    example: '닉네임',
    description: '닉네임',
    required: true,
  })
  public nickname: string;

  @ApiProperty({
    example: '12341234',
    description: '비밀번호',
    required: true,
  })
  public password: string;
}
