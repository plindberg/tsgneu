import { DateTime } from "luxon";

const TZ = "Europe/Stockholm";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("og-image.jpeg");

  eleventyConfig.addFilter("formattedDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: TZ }).toISODate();
  });

  eleventyConfig.addFilter("stripClasses", function (content) {
    if (!content) return content;
    return content.replace(/\s*class="[^"]*"/g, "");
  });

  eleventyConfig.addFilter("rssDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: TZ }).toRFC2822();
  });

  eleventyConfig.addFilter("labelFromUrl", function (url) {
    if (!url) return "";
    try {
      const hostname = new URL(url).hostname;
      if (hostname === "x.com" || hostname === "twitter.com") {
        return "Twitter/X";
      }
      if (hostname === "www.facebook.com") {
        return "Facebook";
      }
      if (hostname === "www.threads.com") {
        return "Threads";
      }
      if (hostname === "www.linkedin.com") {
        return "LinkedIn";
      }
      return hostname.replace(/^www\./, "");
    } catch (e) {
      return "";
    }
  });

  eleventyConfig.addFilter("absoluteLinks", function (content, siteUrl) {
    if (!content || !siteUrl) {
      return content;
    }
    // Using a simpler, more robust replacement method to avoid escaping issues.
    let newContent = content.replace(/href="\//g, `href="${siteUrl}/`);
    newContent = newContent.replace(/src="\//g, `src="${siteUrl}/`);
    return newContent;
  });

  eleventyConfig.addPairedShortcode("blockquote", function (content, cite) {
    return `<blockquote class="space-y-4 text-base/7 max-w-[32rem]" cite="${cite}">${content}</blockquote>`;
  });

  eleventyConfig.addPairedShortcode("acite", function (content, cite) {
    return `’<cite class="not-italic"><a href="${cite}" class="underline">${content}</a></cite>’`;
  });

  eleventyConfig.addPairedShortcode("link", function (content, url) {
    return `<a href="${url}" class="underline">${content}</a>`;
  });

  eleventyConfig.addDateParsing((value) => {
    if (typeof value === "string") {
      const dt = DateTime.fromFormat(value, "yyyy-MM-dd HH:mm", { zone: TZ });
      if (dt.isValid) {
        return dt.toJSDate();
      }
    }
    if (value instanceof Date) {
      return value;
    }
    return value;
  });
}