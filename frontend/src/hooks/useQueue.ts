import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import useControl from "./useControl";

const getQueue = async (ctx: QueryFunctionContext) => {
  const [_, queue] = <[string, number[]]>ctx.queryKey;

  for (const q of queue) {
  }
};

const useQueue = () => {
  const { queue } = useControl();

  return useQuery({ queryKey: ["queue", queue], queryFn: getQueue });
};
