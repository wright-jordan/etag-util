import { createHash } from "crypto";
/** Sets cache-control and etag headers. Returns true if tags match. */
export function etag(data, strategy, req, res) {
    res.setHeader("Cache-Control", strategy);
    const oldETag = req.headers["if-none-match"] ?? "";
    const newETag = createHash("sha1").update(data, "utf-8").digest("hex");
    res.setHeader("ETag", newETag);
    if (oldETag === newETag) {
        return true;
    }
    return false;
}
