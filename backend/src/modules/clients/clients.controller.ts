import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { Client } from './client.entity';

@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientsService.findAll();
  }

  @Post()
  create(@Body() client: Client): Promise<Client> {
    return this.clientsService.create(client);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.clientsService.remove(id);
  }
}
