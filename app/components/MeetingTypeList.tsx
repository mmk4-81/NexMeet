import Link from "next/link";

const MeetingTypeList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Link
        href="/meeting/new"
        className="flex flex-col gap-2 rounded-xl bg-card p-6 hover:bg-card/80"
      >
        <h3 className="text-xl font-semibold">New Meeting</h3>
        <p className="text-muted-foreground">Start an instant meeting</p>
      </Link>
      <Link
        href="/personal-room"
        className="flex flex-col gap-2 rounded-xl bg-card p-6 hover:bg-card/80"
      >
        <h3 className="text-xl font-semibold">Personal Room</h3>
        <p className="text-muted-foreground">
          Start or schedule meetings in your personal room
        </p>
      </Link>
      <Link
        href="/upcoming"
        className="flex flex-col gap-2 rounded-xl bg-card p-6 hover:bg-card/80"
      >
        <h3 className="text-xl font-semibold">Scheduled</h3>
        <p className="text-muted-foreground">View your scheduled meetings</p>
      </Link>
    </div>
  );
};

export default MeetingTypeList;
