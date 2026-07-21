// components/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div
className="
mx-auto
w-full
max-w-7xl
px-0
lg:px-6
"
>
      {children}
    </div>
  );
}