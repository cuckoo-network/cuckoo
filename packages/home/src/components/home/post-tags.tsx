import Link from "@docusaurus/Link";

const tagColor = (tag: string) => {
  const colors = [
    "text-gray-100 bg-blue-500 hover:bg-blue-600",
    "text-gray-100 bg-pink-500 hover:bg-pink-600",
    "text-gray-100 bg-teal-500 hover:bg-teal-600",
    "text-gray-100 bg-orange-500 hover:bg-orange-600",
    "text-gray-100 bg-green-500 hover:bg-green-600",
    "text-gray-100 bg-purple-600 hover:bg-purple-700",
    "text-gray-100 bg-red-500 hover:bg-red-600",
    "text-gray-100 bg-yellow-500 hover:bg-yellow-600",
    "text-gray-100 bg-indigo-500 hover:bg-indigo-600",
    "text-gray-100 bg-gray-500 hover:bg-gray-600"
  ];

  // Generate a hash from the string
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  }

  // Use the hash to pick a color from the array
  const index = Math.abs(hash) % colors.length;

  return colors[index];
};


export default function PostTags({
  tags,
}: {
  tags: { label: string; permalink: string }[];
}) {
  return (
    <div className="flex flex-wrap text-xs font-medium -m-1">
      {tags.map((tag) => (
        <span key={tag.permalink} className="m-1">
          <Link
            href={tag.permalink}
            className={`hover:text-white capitalize inline-flex text-center py-1 px-3 rounded-full transition duration-150 ease-in-out ${tagColor(tag.label)}`}
          >
            {tag.label}
          </Link>
        </span>
      ))}
    </div>
  );
}
