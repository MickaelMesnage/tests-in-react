// expect.extend(matchers);

import { afterAll, afterEach, beforeAll } from "vitest";
import { server } from "./components/PostList/mock/server";

// mock des éléments (localStorage)

// mock des requêtes

// mock des timers

beforeAll(() => server.listen({ onUnhandledRequest: "error" }));
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
