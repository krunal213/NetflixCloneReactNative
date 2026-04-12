import { SplashUseCase } from "./domain/splash/SplashUseCase";
import { container } from "tsyringe";

export type Dependencies = {
  splashUseCase: SplashUseCase;
};

export const getDependencies = (): Dependencies => {
  return {
    splashUseCase: container.resolve(SplashUseCase),
  };
};