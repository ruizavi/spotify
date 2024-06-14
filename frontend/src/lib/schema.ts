import { z } from "zod";

const AlbumSchema = z.object({
	id: z.number(),
	name: z.string(),
	cover: z.string().optional(),
	artist_id: z.coerce.number(),
});

const CreateAlbumSchema = AlbumSchema.omit({ id: true });

const LinkSong = z.array(z.number());

const ArtistSchema = z.object({
	id: z.number(),
	name: z.string(),
	avatar: z.string().optional(),
});

const CreateArtistSchema = ArtistSchema.pick({ name: true });

const PlaylistSchema = z.object({
	id: z.number(),
	name: z.string(),
	cover: z.string().optional(),
	user_id: z.number(),
});

const CreatePlaylistSchema = PlaylistSchema.pick({ name: true });

const SongSchema = z.object({
	id: z.number(),
	name: z.string(),
	duration: z.number(),
	artist_id: z.coerce.number(),
});

const CreateSongSchema = SongSchema.omit({ id: true, duration: true });

const UserSchema = z.object({
	id: z.number(),
	username: z.string(),
	gender: z.string(),
	birthday: z.string().datetime({ offset: false }),
	marketing: z.coerce.boolean().default(false),
	share_content: z.coerce.boolean().default(false),
	email: z.string().email(),
	password: z.string(),
	avatar: z.string().optional(),
});

const SignupSchema = UserSchema.omit({
	id: true,
	avatar: true,
})
	.extend({ confirm_password: z.string() })
	.superRefine(({ password, confirm_password }, ctx) => {
		if (confirm_password !== password) {
			ctx.addIssue({
				code: z.ZodIssueCode.custom,
				message: "Password's doesnt match",
				fatal: true,
			});

			return z.NEVER;
		}
	});

const SigninSchema = UserSchema.pick({
	email: true,
	password: true,
});

const schematas = {
	SongSchema,
	AlbumSchema,
	ArtistSchema,
	PlaylistSchema,
	CreateSongSchema,
	CreateAlbumSchema,
	CreateArtistSchema,
	CreatePlaylistSchema,
	LinkSong,
	SigninSchema,
	SignupSchema,
	UserSchema,
};

export default schematas;
