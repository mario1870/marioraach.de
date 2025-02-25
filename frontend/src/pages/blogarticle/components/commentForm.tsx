import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/ui_components/shadn/components/ui/form';
import { Input } from '@/ui_components/shadn/components/ui/input';
import { Button } from '@/ui_components/shadn/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { CommentFormSchema } from './commentFormSchema';
import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

interface CommentFormProps {
  handleState: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ handleState }) => {
  const { blogId } = useParams();

  const [successfullySend, setSuccessfullySend] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof CommentFormSchema>>({
    resolver: zodResolver(CommentFormSchema),
    defaultValues: {
      username: '',
      comment: '',
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof CommentFormSchema>) {
    setIsLoading(true);
    const jsonData = JSON.stringify({
      username: values.username,
      comment: values.comment,
      blogId: blogId?.toString(),
      date: new Date(),
    });

    fetch('https://j4hxxa1fo2.execute-api.eu-central-1.amazonaws.com/postMySiteComments', {
      method: 'POST',
      body: jsonData,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          console.log('Daten erfolgreich gesendet');
          setSuccessfullySend(true);
          setIsLoading(false);
          handleState();
        } else {
          response.json().then(data => {
            console.error('Fehler beim Senden der Formulardaten:', data.errors);
          });
        }
      })
      .catch(error => {
        console.error('Netzwerkfehler:', error);
      });
  }

  return (
    <div className="md:m-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl pl-0 md:pl-4">Name</FormLabel>
                <FormControl>
                  <Input placeholder="My name is..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-xl pl-4">Comment</FormLabel>
                <FormControl>
                  <Input placeholder="I want so say that..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {isLoading ? (
            <div>
              <Button
                className="float-right bg-blue-600 text-black font-bold"
                disabled
                type="submit"
              >
                Loading
              </Button>
            </div>
          ) : (
            <div>
              <Button className="float-right" type="submit" disabled={successfullySend}>
                {successfullySend ? 'Danke' : 'Submit'}
              </Button>
            </div>
          )}
        </form>
      </Form>
    </div>
  );
};

export default CommentForm;
