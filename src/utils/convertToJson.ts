import { addColor } from "./addColor";

/**
 * Converts a parsed CSV string to a JSON collection of records
 * @param csvText string of the parsed CSV file
 * @returns a JSON collection of records
 */
export function csvToJson(csvText: string) {
  const [header, ...records] = csvText.split("\r\n");

  const columns = header.split(";");

  return records.filter(Boolean).map((record) =>
    record.split(";").reduce<Record<string, string>>((result, value, index) => {
      const key = columns[index];

      result[key] = value;

      // usually there would be an image url for each news record, but for the sake of this task
      // I am calculating a color based on the unique id pf the news record
      if (key === "id") {
        result["color"] = addColor(value);
      }

      return result;
    }, {})
  );
}
