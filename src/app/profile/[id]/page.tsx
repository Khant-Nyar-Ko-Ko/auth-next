/* eslint-disable @typescript-eslint/no-explicit-any */
export default function UserProfile({ params }: any) {
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen py-2 gap-2">
      <h1>Profile</h1>
      <hr />
      <p className=" text-4xl">
        Profile Page{" "}
        <span className=" p-2 rounded bg-orange-500 text-black">
          {params.id}
        </span>{" "}
      </p>
    </div>
  );
}
