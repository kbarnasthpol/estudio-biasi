// components/Container.jsx

export default function Container({ children, className = "" }) {
  return (
    <div
className="
mx-auto
w-full
max-w-7xl
px-6
sm:px-4
lg:px-12
"
>
      {children}
    </div>
  );
}