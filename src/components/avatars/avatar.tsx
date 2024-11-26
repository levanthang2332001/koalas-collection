import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function AvatarImages({ ...props }) {
  return (
    <Avatar className={props.className}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback> 
    </Avatar>
  );
}
