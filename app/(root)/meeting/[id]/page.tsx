import React from "react";

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting = ({ params }: MeetingProps) => {
  return (
    <div>
      <h1>Meeting Room {params.id}</h1>
    </div>
  );
};

export default Meeting;
