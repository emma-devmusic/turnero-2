
import { useForm } from "../hooks/useForm";
import { Input } from "../components";
import { LinkItem } from "../components/shared/LinkItem";
import { TitleWelcomeLogin } from "./modules/TitleWelcomeLogin";
import { Button } from '../components/buttons/Button';
export const Login = () => {

    const [values, handleInputChange, reset] = useForm({
        email: "",
        password: "",
        remember: false
    })

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-7 lg:h-full xl:col-span-8">
                    <img
                        alt="background"
                        src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <TitleWelcomeLogin
                        variant='dark' 
                        text="Ingresa a tu cuenta y retoma el control de tus inventarios en segundos. Administra tus productos, consulta tus estadísticas y mantente siempre informado con Ding Stocks. ¡Tu stock, siempre en tus manos!"
                    />
                </section>
                <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-5 lg:px-16 lg:py-12 xl:col-span-4">
                    <div className="max-w-xl lg:max-w-3xl">
                        <TitleWelcomeLogin
                            variant='light' 
                            text="Ingresa a tu cuenta y retoma el control de tus inventarios en segundos. Administra tus productos, consulta tus estadísticas y mantente siempre informado con Ding Stocks. ¡Tu stock, siempre en tus manos!"
                        />
                        <h3 className="text-center text-3xl text-gray-700 hidden lg:block">🦑Login</h3>
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6 sm:min-w-[380px]">
                            <div className="col-span-6">
                                <Input
                                    label="Email"
                                    name="email"
                                    onChange={handleInputChange}
                                    type="email"
                                    value={values.email}
                                    placeholder="correo@correo.com"
                                />
                            </div>
                            <div className="col-span-6 ">
                                <Input
                                    label="Contraseña"
                                    name="password"
                                    onChange={handleInputChange}
                                    type="password"
                                    value={values.password}
                                    placeholder="123456789"
                                />
                            </div>
                            <div className="col-span-6">
                                <Input
                                    label="Recordarme"
                                    name="remember"
                                    onChange={handleInputChange}
                                    type="checkbox"
                                    checked={values.remember}
                                />
                            </div>
                            <div className="col-span-6 flex flex-col items-center gap-4">
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <span>¿Aún no tienes una cuenta? </span>
                                    <LinkItem to={'/register'}>Regístrate</LinkItem>.
                                </p>
                                <Button
                                    action={() => ''}
                                    className="w-full sm:w-auto"
                                    variant="primary"
                                    label="Iniciar Sesión"
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    );
};
