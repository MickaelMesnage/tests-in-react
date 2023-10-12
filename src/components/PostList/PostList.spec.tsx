import {
  render,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { describe, expect, it } from "vitest";
import { PostList } from "./PostList";
import { posts } from "./mock/handlers";

describe("PostList", () => {
  it("Should return posts", async () => {
    render(<PostList />);
    await waitForElementToBeRemoved(() => screen.queryByText("Loading..."));

    posts.forEach((post) => {
      expect(
        screen.getByRole("heading", { name: post.title, level: 3 })
      ).toBeDefined();
      expect(screen.getByText(post.body)).toBeDefined();
    });
  });
});
