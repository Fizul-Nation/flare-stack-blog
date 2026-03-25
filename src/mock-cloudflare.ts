// Mock for cloudflare:workers during local development
// This file is only used in development and replaced in production

export class WorkerEntrypoint {
  constructor(ctx?: any) {}
  fetch(request: Request): Response | Promise<Response> {
    return new Response("Mock WorkerEntrypoint", { status: 200 });
  }
}

export class WorkflowEntrypoint {
  constructor(ctx?: any) {}
  run(event: any, step: any): Promise<any> {
    return Promise.resolve({});
  }
}

export class DurableObject {
  constructor(state: any, env: any) {}
  fetch(request: Request): Response | Promise<Response> {
    return new Response("Mock DurableObject", { status: 200 });
  }
}

export type WorkflowEvent = any;
export type WorkflowStep = any;

export default {
  WorkerEntrypoint,
  WorkflowEntrypoint,
  DurableObject,
};