import React from "react";
import {GitHubCalendar} from "react-github-calendar";

type GitHubCalendarWrapperProps = {
  username: string;
  blockSize?: number;
  blockMargin?: number;
  color?: string;
  fontSize?: number;
  style?: React.CSSProperties;
};

const GitHubCalendarWrapper: React.FC<GitHubCalendarWrapperProps> = ({
  username,
  blockSize = 15,
  blockMargin = 5,
  color = "#1e293b",
  fontSize = 14,
  style,
}) => {
  return (
    <div style={style}>
      <GitHubCalendar
        username={username}
        blockSize={blockSize}
        blockMargin={blockMargin}
        color={color}
        fontSize={fontSize}
      />
    </div>
  );
};

export default GitHubCalendarWrapper;