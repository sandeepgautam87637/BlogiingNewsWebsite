import java.util.Scanner;

public class File {
    public static void usernamePassword(){
        Scanner scsec = new Scanner(System.in);
     System.out.println("Enter your username");
     String user_name = scsec.next();
     System.out.println("Enter your Password");
     String user_pass = scsec.next();
     System.out.println("Your Username and password is saved into the database");
     
    }
    public static void Registeration(){
        Scanner scthird = new Scanner(System.in);
        System.out.println("Enter your Name");
        String name = scthird.next();
        System.out.println("Enter your Age");
        int age = scthird.nextInt();
        System.out.println("Enter your Occupation");
        String occupation = scthird.next();
        System.out.println("Enter your Address");
        String address = scthird.next();
        System.out.println("Enter your Pincode");
        int pincode = scthird.nextInt();
        System.out.println("Enter your Email");
        String email = scthird.next();
        System.out.println("Your Registeration process is completed");

    }
    public static void MPI_PIN(){
    Scanner scfourth = new Scanner(System.in);
    System.out.println("Enter your MPI pin");
    int MPI_PIN = scfourth.nextInt();
    System.out.println("Your Pin is set");
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Allow Access device permission");
        System.out.println("Yes or No");
        String user_permission = sc.next();
        if(user_permission.equals("yes")){
            System.out.println("Welcome to our INOC bank");
        }
        else{
            System.exit(1);
        }
        System.out.println("verify your Phone number");
        String user_PhoneNumber = sc.next();
        int otp = 89393;
        if(user_PhoneNumber.length() <10){
           System.out.println("Please fill your correct phone number");
            user_PhoneNumber = sc.next();  
            if(user_PhoneNumber.length() == 10){
                System.out.println("Your Otp is " + otp);  
            }
                 
        }
       
      if(user_PhoneNumber.length() == 10){
        System.out.println("Your Otp is " + otp);  

        System.out.println("Enter your OTP number");
        int otp_num = sc.nextInt();
        if(otp_num != otp){
            System.out.println("Please fill your correct otp");
            otp_num = sc.nextInt();
        }
        else{
            System.out.println("Completed");
        }
    
        if(otp_num == otp){
         usernamePassword();
         System.out.println("Complete your Registeration Process");
         Registeration();
         MPI_PIN();
        }
    
       
        
      }

    }
}
