import { FC, ReactNode, useState } from "react";
import mql from "@microlink/mql";
import { motion } from "framer-motion";

type Props = {
  url: string;
  urlAlt: string;
  children: ReactNode;
};

type PreviewRequestStatus =
  | { status: "idle" }
  | { status: "pending" }
  | { status: "fail" }
  | { status: "success"; url: string };

const dropIn = {
  hidden: {
    y: "-10vh",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

export const LinkPreviewer: FC<Props> = ({ url, urlAlt, children }) => {
  const [showPreview, setShowPreview] = useState(false);
  const [previewRequestStatus, setPreviewRequestStatus] =
    useState<PreviewRequestStatus>({ status: "idle" });

  const fetchPreviewLink = async () => {
    setPreviewRequestStatus({ status: "pending" });
    const { status, data } = await mql(url, { screenshot: true });
    if (status === "fail") {
      setPreviewRequestStatus({ status });
    } else if (data.image?.url) {
      setPreviewRequestStatus({ status, url: data.image.url });
    }
  };

  const handleMouseEnter = () => {
    if (!url) return;
    if (previewRequestStatus.status === "idle") {
      fetchPreviewLink();
    }
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* looked below out from the solution while learning framer motion */}
      {showPreview && previewRequestStatus.status === 'success' && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "absolute",
            top: "-100px",
            // left: "-60px",
            right: "0",
            zIndex: 10,
            backgroundColor: "transparent",
          }}
        >
          <motion.img alt={urlAlt} className="image" src={previewRequestStatus.url} width={200} height={125} />
        </motion.div>
      )}
      {children}
    </div>
  );
};
