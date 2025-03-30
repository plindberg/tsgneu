import { DateTime } from "luxon";

const TZ = "Europe/Stockholm";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("og-image.jpeg");

  eleventyConfig.addFilter("formattedDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: TZ }).toISODate();
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
