import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Github } from 'lucide-react'; // Importing GitHub icon
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Register = () => {
  useEffect(() => {
    // Prevent scrolling
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className='fixed inset-0 flex justify-center items-center  mt-24'> {/* Use fixed positioning */}
      <Card className="w-1/3"> {/* Adjusted width to 1/3 for a slightly larger card */}
        <CardHeader className="space-y-1"> {/* Corrected to space-y-1 */}
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details to create an account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-2"> {/* Restored gap-4 for better spacing */}
          <div className="flex justify-center gap-2"> {/* Removed margin-bottom */}
            <Button variant="outline" className="flex items-center w-1/2">
              <Github className="mr-2" /> GitHub
            </Button>
            <button className="social-button google flex items-center justify-center w-1/2 border rounded-md">
              <svg viewBox="0 0 488 512" height="1em" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
              </svg>
              Google
            </button>
          </div>
          <div className="relative my-1"> {/* Reduced margin-top and margin-bottom */}
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-sm bg-background px-2">
              <span className="bg-background px-2">OR SIGN UP WITH</span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Username</Label>
            <Input id="name" type="text" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="user@iamneo.ai" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="******" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="dob">Date of Birth</Label>
            <Input id="dob" type="date" />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full mb-2">Create account</Button>
          <div className="text-right">
            <Link to="/login" className="text-sm text-muted-foreground">Already have an account? Login</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Register;
