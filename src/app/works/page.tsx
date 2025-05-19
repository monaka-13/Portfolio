import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {works} from "@/constants/works"

export default function Page() {
  return (
    <>
      <h2>Works</h2>
      <div
        className='grid grid-cols-1 justify-items-center
          gap-4
          p-4
          xs:grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3'
      >
        {works.map((work, index) => (
          <Card key={index} className='col-span-1
              border
              min-w-96
              max-w-xl
              min-h-96
              border-gray-200
              rounded-lg
              shadow-sm
              hover:shadow-xl'>
            <CardHeader>
              <CardTitle>{work.title}</CardTitle>
              <CardDescription>{work.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{work.content}</p>
            </CardContent>
            <CardFooter>
              <p>{work.footer}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  )
}