import React, { useState, useEffect } from "react";
import { PatchEvent, set, unset, useFormValue } from "sanity";
import { Select, Button, Stack } from "@sanity/ui";
import { fetchWithToken } from "studio/lib/fetchWithToken";

interface AnchorSelectProps {
  value?: string;
  type: any;
  onChange: (event: PatchEvent) => void;
  path: any[];
  schemaType: any;
}

interface AnchorItem {
  basicTitle?: string;
  value: string;
  _type?: string;
  _key?: string;
}

function fromCamelCase(value?: string) {
  if (!value) {
    return;
  }
  return value
    .replace(/([a-z])([A-Z])/g, "$1 $2") // Add space between lowercase and uppercase letters
    .replace(/^./, function (match) {
      return match.toUpperCase();
    }); // Capitalize the first letter
}

const AnchorSelect = ({ value, onChange, path }: AnchorSelectProps) => {
  const [listItems, setListItems] = useState<AnchorItem[]>([]);

  // Extract the internal link reference from the form value
  const internalLink = useFormValue([...path.slice(0, -1), "internalLink"]) as {
    _ref?: string;
  };

  // Fetch sections based on the internal link reference
  const fetchSections = async (internalLinkRef?: string) => {
    if (!internalLinkRef) {
      setListItems([]);
      return;
    }

    try {
      const response = await fetchWithToken<{
        sections: AnchorItem[];
      }>("*[_id == $id][0]{sections[]{_key, basicTitle}}", {
        id: internalLinkRef,
      });

      const formattedResponseToListItems = response.sections.map(
        (section: AnchorItem, index: number) => {
          const title = section.basicTitle || fromCamelCase(section._type);
          return {
            basicTitle: title,
            value: `#${section._key}`,
          };
        },
      );

      setListItems(formattedResponseToListItems);
    } catch (error) {
      console.error("Error fetching sections:", error);
      setListItems([]);
    }
  };

  // useEffect hook to fetch sections when internalLink changes
  useEffect(() => {
    fetchSections(internalLink?._ref);
  }, [internalLink?._ref]);

  // Handle change event for the select input
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(PatchEvent.from(selectedValue ? set(selectedValue) : unset()));
  };

  // Handle reset event to clear the select input and reset the list items
  const handleReset = () => {
    onChange(PatchEvent.from(unset()));
  };

  return (
    <Stack space={3}>
      <Select onChange={handleChange} value={value || ""}>
        <option value="" disabled>
          Select a section
        </option>
        {listItems.map((item) => (
          <option key={item.value} value={item.value}>
            {item.basicTitle}
          </option>
        ))}
      </Select>
      {value && <Button text="Reset" tone="critical" onClick={handleReset} />}
    </Stack>
  );
};

export default AnchorSelect;
