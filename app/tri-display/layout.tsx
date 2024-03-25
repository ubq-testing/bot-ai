export default function DualLayout(props: {
  children: React.ReactNode;
  data: React.ReactNode;
  docs: React.ReactNode;
}) {
  return (
    <div className="">
      {props.children}
      {props.docs}
    </div>
  );
}
