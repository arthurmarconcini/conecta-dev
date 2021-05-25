import { makeStyles } from '@material-ui/core/styles';
import PostCard from '../../../components/PostCard/Index'

const useStyles = makeStyles((theme) => ({
    root: {        
    }
}))

const posts = [
    {
        id: 1, 
        author: {
            id: 1, 
            name: 'Arthur Marconcini',
            username:'arthurmarconcini',
            avatar: '/images/avatars/avatar.svg'
        },
        title: 'Criando um App do zero utilizando React.js',
        date: "April 7, 2020",
        description: 'Fala pessoal! Qual o framework favorito de vcs?',
        hashtags: '#dotnet, #javascript, #reactjs, #developer',
        image:'/images/posts/image.jpg'
    }
];

export default function Feed() {
    const classes = useStyles();

    return(
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }            
        </div>
    )
}