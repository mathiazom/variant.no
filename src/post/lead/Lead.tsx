"use client";
import { PortableTextBlock } from "src/components/richText/RichText";
import { useConvertSanityImageToNextImage } from "src/utils/hooks/useConvertImage";
import { IImage } from "studio/lib/payloads/media";
import styles from "./lead.module.css";
import { PortableText } from "@portabletext/react";
import Text from "src/components/text/Text";

const myPortableTextComponents = {
  block: ({ children }: any) => <Text type="bodyLarge">{children}</Text>,
};

const Lead = ({
  image,
  richText,
}: {
  image: IImage;
  richText: PortableTextBlock[];
}) => {
  const renderedImage = useConvertSanityImageToNextImage(image);

  return (
    <div className={styles.lead}>
      {renderedImage && <div className={styles.image}>{renderedImage}</div>}
      {richText && (
        <div className={styles.body}>
          <PortableText
            value={richText}
            components={myPortableTextComponents}
          />
        </div>
      )}
    </div>
  );
};

export default Lead;
