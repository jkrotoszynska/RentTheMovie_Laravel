import React, { useEffect } from "react";
import { Link, Head } from "@inertiajs/inertia-react";
import Layout from "@/Layouts/Layout";
import { useState } from "react/cjs/react.development";

const Categories = (props) => {
    const [genreMovieList, setGenreMovieList] = useState([]);

    useEffect((props) => {

        setGenreMovieList(props.genre);
    }, []);
    
    return (
        <div className="h-screen overflow-auto pb-[200px] scrollbar-hide">
            <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center gap-x-5 gap-y-12">
                {genreMovieList.map((movie) => {
                    return <MovieCard movieData={movie} />;
                })}
            </div>
        </div>
    );
};

Categories.layout = (page) => <Layout children={page} title="Home" />;

export default Categories;
