import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}

export class UpdateTodoDto {
  @IsString()
  title?: string;

  completed?: boolean;
}
