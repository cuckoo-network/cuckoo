import Link from "@docusaurus/Link";

export default function PostTags({
  tags,
}: {
  tags: { label: string; permalink: string }[];
}) {
  const tagColor = (tag: string) => {
    switch (tag) {
      case "engineering":
        return "text-gray-100 bg-blue-500 hover:bg-blue-600";
      case "research":
        return "text-gray-100 bg-pink-500 hover:bg-pink-600";
      case "cuckoo chain":
        return "text-gray-100 bg-teal-500 hover:bg-teal-600";
      case "airdrop":
        return "text-gray-100 bg-orange-500 hover:bg-orange-600";
      case "culture":
        return "text-gray-100 bg-green-500 hover:bg-green-600";
      default:
        return "text-gray-100 bg-purple-600 hover:bg-purple-700";
    }
  };

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
