'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip';
import { Icon } from '@iconify/react';
import { useState } from 'react';

export type FeedItemProps = {
  nickname?: string;
  title?: string;
  content?: string;
};

export function FeedItem({ nickname, title, content }: FeedItemProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePushTry = () => {
    alert('힘이 약합니다. 코드를 뿌실 준비가 안되었습니다.');
  };

  return (
    <Card className="me-4">
      <CardHeader>
        <CardTitle className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
            <Label className="text-md">{nickname}</Label>
          </div>
          <div className="flex items-center gap-1">
            <Icon
              icon={
                isLiked
                  ? 'material-symbols:favorite'
                  : 'material-symbols:favorite-outline-rounded'
              }
              width={28}
              height={28}
              color="red"
              className="cursor-pointer"
              onClick={handleLike}
            />
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Link href="https://github.com/lafin" target="_blank">
                    <Icon icon="mdi:github" width={28} height={28} />
                  </Link>
                </TooltipTrigger>
                <TooltipContent align="center" side="top" sideOffset={8}>
                  Github 저장소로 이동
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider delayDuration={0}>
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    icon="game-icons:punch-blast"
                    width={28}
                    height={28}
                    onClick={handlePushTry}
                  />
                </TooltipTrigger>
                <TooltipContent align="center" side="top" sideOffset={8}>
                  코드뿌시기
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardTitle>
        <CardContent className="pt-3 text-sm">
          <p className="text-lg font-bold">{title}</p>
          <p className="text-sm">{content}</p>
        </CardContent>
      </CardHeader>
    </Card>
  );
}

export default FeedItem;
