export const metadata = {
  description: "",
};

export default function DualLayout(props: {
  children: React.ReactNode;
  data: React.ReactNode;
  docs: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-3 shrink">
      {props.children}
      {props.docs}
    </div>
  );
}
