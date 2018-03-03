
export class LoggingService implements GenericLoggingService{
  logStatus(status: string): void {
    console.log('A server status changed, new status: '+status);
  }
}

export class GenericLoggingService{
  logStatus(status: string): void{

  };
}
