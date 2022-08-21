import { setupWorker } from "msw";
import { OWHandler } from "./handlers";

export const worker = setupWorker(...OWHandler);
