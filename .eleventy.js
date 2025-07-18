import { DateTime } from "luxon";

const TZ = "Europe/Stockholm";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("og-image.jpeg");

  eleventyConfig.addFilter("formattedDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: TZ }).toISODate();
  });

  eleventyConfig.addFilter("stripClasses", function (content) {
    if (!content) return content;
    return content.replace(/\s*class="[^"]*"/g, '');
  });

  eleventyConfig.addFilter("rssDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: TZ }).toRFC2822();
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
