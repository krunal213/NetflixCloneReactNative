export class SplashUseCase {

    async execute(): Promise<boolean> {
        await new Promise<void>(resolve => setTimeout(resolve, 2000));
        return true;
    }

}